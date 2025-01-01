import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';


function UserDocumentStats({ userData, target = 100 }) {
    const currentDocs = userData?.documents?.length || 0;
    const progress = Math.min((currentDocs / target) * 100, 100); // Limit progress to 100%

    const chartData = [
        { name: 'Start', value: 0 },
        { name: 'Progress', value: progress },
        { name: 'Target', value: 100 },
    ];

    return (
        <div style={{
            padding: '20px',
            borderRadius: '16px',
            margin: '20px',
            textAlign: 'center',
            background: 'linear-gradient(145deg, #2a2f4b, #392160)',  // A more vivid gradient
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
        }}>
            {/* Target Display */}
            <h3 style={{ color: '#fff', marginBottom: '12px' }}>Target: {target} Documents</h3>

            {/* Wave Progress */}
            <LineChart
                width={400}
                height={200}
                data={chartData}
                margin={{ top: 10, right: 20, bottom: 10, left: 20 }}
            >
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#FFD700" // Neon yellow line
                    strokeWidth={4}
                    dot={{ r: 6, fill: '#FFD700', strokeWidth: 2, stroke: '#fff' }} // Yellow dots with white border
                    style={{
                        filter: 'drop-shadow(0px 0px 8px #FFD700)', // Neon glow effect
                    }}
                />
                <XAxis dataKey="name" tick={{ fill: '#fff' }} />
                <YAxis domain={[0, 100]} tick={{ fill: '#fff' }} />
                <Tooltip
                    contentStyle={{ backgroundColor: '#6a5af9', borderRadius: '8px', border: 'none' }}
                    labelStyle={{ color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                />
            </LineChart>

            {/* Current Status */}
            <p style={{ color: '#fff', fontSize: '16px', marginTop: '12px' }}>
                {currentDocs}/{target} Documents Uploaded ({Math.round(progress)}%)
            </p>
        </div>
    )
}

export default UserDocumentStats
