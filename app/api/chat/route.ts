import { NextResponse } from 'next/server'

const N8N_WEBHOOK_URL = 'https://techlo-design-solutions.app.n8n.cloud/webhook/9cd82bc0-b150-4c28-b814-c779aa005d2f'

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    const latestMessage = messages[messages.length - 1]

    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: latestMessage.content
      }),
    })

    const responseText = await response.text()
    console.log('Raw n8n response:', responseText)

    try {
      const data = JSON.parse(responseText)
      
      // Handle workflow not active error
      if (data.code === 404) {
        return NextResponse.json({
          output: "I'm having trouble connecting right now. Please try again in a moment while I get my systems back online."
        })
      }

      // Handle successful response
      if (data.output || data.response || data.message) {
        return NextResponse.json({
          output: data.output || data.response || data.message
        })
      }

      // Handle workflow started but no response
      return NextResponse.json({
        output: "I'm processing your request. Please try asking your question again."
      })

    } catch (e) {
      return NextResponse.json({ 
        output: "I'm having trouble understanding the response. Please try again." 
      })
    }
  } catch (error: any) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to get response' },
      { status: 500 }
    )
  }
}
