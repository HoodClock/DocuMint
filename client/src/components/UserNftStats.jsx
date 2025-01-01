import React from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts'


function UserNftStats({ userData, target = 100 }) {
    const currentNfts = userData?.nfts.length || 0;
    const progress = Math.min((currentNfts / target) * 100, 100);

    const chartData = [
        { name: 'Start', value: 0 },
        { name: 'Progress', value: progress },
        { name: 'Target', value: 100 },
    ]

    return (

        <div style={{
            padding: '20px',
            borderRadius: '16px',
            margin: '20px',
            textAlign: 'center',
            background: 'linear-gradient(145deg, #2a2f4b, #392160)',  // A similar gradient to the previous one
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
        }}>
            {/* Target Display */}
            <h3 style={{ color: '#fff', marginBottom: '12px' }}>Target: {target} NFTs</h3>

            {/* Area Chart for Progress */}
            <AreaChart
                width={400}
                height={200}
                data={chartData}
                margin={{ top: 10, right: 20, bottom: 10, left: 20 }}
            >
                <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#32CD32"  // Green line
                    fill="#32CD32"    // Green fill for the area
                    strokeWidth={4}
                    style={{
                        filter: 'drop-shadow(0px 0px 8px #32CD32)', // Neon green glow effect
                    }}
                />
                <XAxis dataKey="name" tick={{ fill: '#fff' }} />
                <YAxis domain={[0, 100]} tick={{ fill: '#fff' }} />
                <Tooltip
                    contentStyle={{ backgroundColor: '#6a5af9', borderRadius: '8px', border: 'none' }}
                    labelStyle={{ color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                />
            </AreaChart>

            {/* Current Status */}
            <p style={{ color: '#fff', fontSize: '16px', marginTop: '12px' }}>
                {currentNfts}/{target} NFTs Uploaded ({Math.round(progress)}%)
            </p>
        </div>
    )
}

export default UserNftStats
