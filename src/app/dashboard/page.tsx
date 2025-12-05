import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, AlertTriangle, HeartPulse, Zap } from 'lucide-react';

export default function DashboardPage() {
  // Mock data - replace with real data from your API
  const stats = [
    {
      title: 'Active Rangers',
      value: '12',
      icon: Activity,
      description: 'Currently on mission',
    },
    {
      title: 'Critical Alerts',
      value: '3',
      icon: AlertTriangle,
      description: 'Requires immediate attention',
      variant: 'destructive' as const,
    },
    {
      title: 'Avg. Heart Rate',
      value: '72',
      icon: HeartPulse,
      description: 'BPM across all rangers',
    },
    {
      title: 'Power Levels',
      value: '87%',
      icon: Zap,
      description: 'Average suit power',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Real-time telemetry and analytics for your ranger team
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Telemetry Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              Telemetry charts will be displayed here
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center p-3 space-x-4 border rounded-md"
                >
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Elevated heart rate detected
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Ranger #{i} - {i * 5} minutes ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
