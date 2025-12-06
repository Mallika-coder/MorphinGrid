import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileText, FileArchive, FileImage, FileCode, CheckCircle2, XCircle } from 'lucide-react';

export default function UploadPage() {
  // Mock function for file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Handle file upload logic here
      console.log('Files selected:', files);
    }
  };

  // Mock recent uploads data
  const recentUploads = [
    { 
      id: 1, 
      name: 'telemetry_data_20231206.csv', 
      type: 'csv', 
      size: '2.4 MB', 
      status: 'completed',
      uploadedAt: '2025-12-06T09:30:00Z'
    },
    { 
      id: 2, 
      name: 'ranger_health_metrics.json', 
      type: 'json', 
      size: '1.2 MB', 
      status: 'completed',
      uploadedAt: '2025-12-05T14:22:00Z'
    },
    { 
      id: 3, 
      name: 'mission_report_alpha.pdf', 
      type: 'pdf', 
      size: '5.7 MB', 
      status: 'completed',
      uploadedAt: '2025-12-04T16:45:00Z'
    },
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'csv':
      case 'xlsx':
        return <FileText className="w-5 h-5 text-blue-500" />;
      case 'zip':
      case 'rar':
        return <FileArchive className="w-5 h-5 text-amber-500" />;
      case 'jpg':
      case 'png':
      case 'gif':
        return <FileImage className="w-5 h-5 text-green-500" />;
      case 'json':
      case 'xml':
        return <FileCode className="w-5 h-5 text-purple-500" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Data Upload</h2>
        <p className="text-muted-foreground">
          Upload telemetry data, reports, and mission files
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Upload New Files</CardTitle>
            <CardDescription>
              Drag and drop files here or click to browse
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-muted-foreground/20 rounded-lg bg-muted/30">
              <div className="p-4 rounded-full bg-primary/10 mb-4">
                <Upload className="w-8 h-8 text-primary" />
              </div>
              <div className="text-center space-y-2">
                <h4 className="text-lg font-medium">Select files to upload</h4>
                <p className="text-sm text-muted-foreground">
                  Supported formats: CSV, JSON, XML, PDF, ZIP (Max 100MB)
                </p>
              </div>
              <label className="mt-6 cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                <input 
                  type="file" 
                  className="hidden" 
                  multiple 
                  onChange={handleFileUpload}
                  accept=".csv,.json,.xml,.pdf,.zip"
                />
                Select Files
              </label>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Uploads</CardTitle>
            <CardDescription>Your most recent file uploads</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUploads.map((file) => (
                <div key={file.id} className="flex items-center p-3 rounded-lg hover:bg-muted/50">
                  <div className="p-2 rounded-lg bg-muted mr-4">
                    {getFileIcon(file.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{file.name}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span className="capitalize">{file.type}</span>
                      <span className="mx-1">•</span>
                      <span>{file.size}</span>
                      <span className="mx-1">•</span>
                      <span>{new Date(file.uploadedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  {file.status === 'completed' ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upload Guidelines</CardTitle>
            <CardDescription>Best practices for file uploads</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 text-green-500 mr-2 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Ensure all files are properly formatted according to our specifications</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 text-green-500 mr-2 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Compress large files before uploading (ZIP/RAR)</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 text-green-500 mr-2 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Verify data accuracy before submission</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 text-green-500 mr-2 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Contact support for files larger than 100MB</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
