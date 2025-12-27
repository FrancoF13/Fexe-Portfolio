import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

// Route segment config
export const runtime = 'nodejs'

// Image metadata
export const size = {
    width: 256,
    height: 256,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    const filePath = join(process.cwd(), 'public', 'logo.jpg')
    const file = readFileSync(filePath)
    const base64 = `data:image/jpeg;base64,${file.toString('base64')}`

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    border: '8px solid white',
                    overflow: 'hidden',
                    backgroundColor: 'black',
                }}
            >
                <img
                    src={base64}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    )
}
