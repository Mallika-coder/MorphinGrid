import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const telemetryData = [
  { name: '00:00', heartRate: 72, power: 85, temperature: 36.5 },
  { name: '01:00', heartRate: 75, power: 82, temperature: 36.7 },
  { name: '02:00', heartRate: 80, power: 80, temperature: 36.9 },
  { name: '03:00', heartRate: 85, power: 78, temperature: 37.1 },
  { name: '04:00', heartRate: 82, power: 75, temperature: 36.9 },
  { name: '05:00', heartRate: 78, power: 77, temperature: 36.8 },
];

export default function TelemetryPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Telemetry</h2>
          <p className="text-muted-foreground">
            Real-time monitoring of ranger vitals and suit metrics
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Ranger Vital Signs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={telemetryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="heartRate" stroke="#8884d8" name="Heart Rate (BPM)" />
                  <Line type="monotone" dataKey="temperature" stroke="#82ca9d" name="Temperature (°C)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Suit Power Levels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={telemetryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="power" stroke="#ffc658" name="Power Level (%)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Ranger Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="font-medium">Ranger {id}</span>
                </div>
                <span className="text-sm text-muted-foreground">Online</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
