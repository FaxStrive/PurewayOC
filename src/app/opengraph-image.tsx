import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'PureWay OC';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display:         'flex',
          flexDirection:   'column',
          alignItems:      'center',
          justifyContent:  'center',
          width:           '100%',
          height:          '100%',
          background:      'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)',
          fontFamily:      'sans-serif',
          color:           '#ffffff',
          padding:         '60px',
        }}
      >
        <div
          style={{
            fontSize:   72,
            fontWeight: 700,
            textAlign:  'center',
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          PureWay OC
        </div>
        <div
          style={{
            fontSize:   32,
            opacity:    0.85,
            textAlign:  'center',
          }}
        >
          Professional Water Treatment Services
        </div>
      </div>
    ),
    { ...size }
  );
}
