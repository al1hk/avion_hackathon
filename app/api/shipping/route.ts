import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { fromAddress, toAddress, packageDetails, cartItems } = await request.json();

    // Get API key from environment
    if (!process.env.SHIPENGINE_API_KEY) {
      throw new Error('SHIPENGINE_API_KEY is not configured in environment variables');
    }

    // Create shipment details
    const shipment = {
      carrier_id: "se-5283894",  // Test carrier ID for ShipEngine sandbox
      service_code: "usps_priority_mail",
      ship_from: {
        name: 'Avion Store',
        phone: '555-555-5555',
        company_name: 'Avion Store',
        address_line1: fromAddress.addressLine1 || '525 S Winchester Blvd',
        city_locality: fromAddress.city || 'San Jose',
        state_province: fromAddress.state || 'CA',
        postal_code: fromAddress.postalCode || '95128',
        country_code: fromAddress.country || 'US',
      },
      ship_to: {
        name: toAddress.name,
        phone: toAddress.phone || '555-555-5555',
        address_line1: toAddress.addressLine1,
        city_locality: toAddress.city,
        state_province: toAddress.state,
        postal_code: toAddress.postalCode,
        country_code: toAddress.country || 'US',
      },
      packages: [{
        weight: {
          value: packageDetails.weight || 1,
          unit: 'pound'
        },
        dimensions: {
          length: packageDetails.dimensions.length || 6,
          width: packageDetails.dimensions.width || 6,
          height: packageDetails.dimensions.height || 6,
          unit: 'inch'
        }
      }]
    };

    console.log('Request payload:', JSON.stringify(shipment, null, 2));

    // Get shipping rates from ShipEngine API
    const response = await fetch('https://api.shipengine.com/v1/rates/estimate', {
      method: 'POST',
      headers: {
        'Host': 'api.shipengine.com',
        'Content-Type': 'application/json',
        'API-Key': process.env.SHIPENGINE_API_KEY,
        'Accept': 'application/json'
      },
      body: JSON.stringify(shipment)
    });

    const responseData = await response.json();
    console.log('ShipEngine API Response:', JSON.stringify(responseData, null, 2));

    if (!response.ok) {
      console.error('ShipEngine API error status:', response.status);
      console.error('ShipEngine API error:', responseData);
      return NextResponse.json(
        { error: 'Failed to get shipping rates', details: responseData },
        { status: response.status }
      );
    }

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Shipping calculation error:', error);
    return NextResponse.json(
      { error: 'Failed to calculate shipping rates', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
