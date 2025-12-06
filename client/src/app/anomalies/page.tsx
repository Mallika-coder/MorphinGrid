import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AlertCircle, HeartPulse, Zap, Thermometer, AlertTriangle } from 'lucide-react';

const anomalies = [
  {
    id: 1,
    type: 'elevated_heart_rate',
    title: 'Elevated Heart Rate',
    description: 'Ranger #1 heart rate above threshold (120 BPM)',
    severity: 'high',
    timestamp: '2025-12-06T10:30:00Z',
    icon: HeartPulse,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
  },
  {
    id: 2,
    type: 'power_drain',
    title: 'Rapid Power Drain',
    description: 'Ranger #3 suit power draining rapidly',
    severity: 'medium',
    timestamp: '2025-12-06T10:15:00Z',
    icon: Zap,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
  },
  {
    id: 3,
    type: 'high_temperature',
    title: 'High Suit Temperature',
    description: 'Ranger #2 suit temperature critical (39.5°C)',
    severity: 'high',
    timestamp: '2025-12-06T09:45:00Z',
    icon: Thermometer,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
];

export default function AnomaliesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Anomaly Detection</h2>
          <p className="text-muted-foreground">
            Track and manage detected anomalies in real-time
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span>High</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span>Medium</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Low</span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Active Anomalies</CardTitle>
            <CardDescription>Real-time anomaly detection alerts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {anomalies.map((anomaly) => {
              const Icon = anomaly.icon;
              return (
                <div 
                  key={anomaly.id}
                  className={`flex items-start p-4 rounded-lg ${anomaly.bgColor} border-l-4 ${anomaly.severity === 'high' ? 'border-red-500' : 'border-amber-500'}`}
                >
                  <div className={`p-2 rounded-full ${anomaly.bgColor} mr-4`}>
                    <Icon className={`w-5 h-5 ${anomaly.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{anomaly.title}</h4>
                    <p className="text-sm text-muted-foreground">{anomaly.description}</p>
                    <div className="mt-2 flex items-center text-xs text-muted-foreground">
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      Detected {new Date(anomaly.timestamp).toLocaleString()}
                    </div>
                  </div>
                  <button className="text-xs font-medium text-primary hover:underline">
                    View Details
                  </button>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Anomaly Statistics</CardTitle>
            <CardDescription>Overview of anomaly patterns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Today</span>
                <span className="text-sm text-muted-foreground">8 total</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 via-amber-500 to-green-500" style={{ width: '75%' }}></div>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
                  <span>5 High</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-1"></div>
                  <span>2 Medium</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                  <span>1 Low</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Common Anomaly Types</h4>
              <div className="space-y-1">
                {[
                  { type: 'Elevated Heart Rate', count: 5, color: 'bg-red-500' },
                  { type: 'Power Fluctuations', count: 3, color: 'bg-amber-500' },
                  { type: 'Temperature Spikes', count: 2, color: 'bg-orange-500' },
                  { type: 'Connection Drops', count: 1, color: 'bg-blue-500' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{item.type}</span>
                    <div className="flex items-center">
                      <span className="w-8 text-right mr-2">{item.count}</span>
                      <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
