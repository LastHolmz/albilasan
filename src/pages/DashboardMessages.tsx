import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Reply, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DashboardMessages = () => {
  const { toast } = useToast();
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const [replyText, setReplyText] = useState("");
  
  const messages = [
    {
      id: 1,
      name: "أحمد محمد",
      email: "ahmed@example.com",
      phone: "+963999123456",
      subject: "استفسار عن مقهى عصري",
      message: "أريد الاستفسار عن المقهى المعروض للبيع، هل يمكن معاينته؟",
      date: "2024-01-15",
      isRead: false
    },
    {
      id: 2,
      name: "فاطمة علي",
      email: "fatima@example.com", 
      phone: "+963999654321",
      subject: "سؤال عن أسعار المطاعم",
      message: "ما هي آلية تحديد أسعار المطاعم؟ وهل يمكن التفاوض؟",
      date: "2024-01-14",
      isRead: true
    },
    {
      id: 3,
      name: "محمد حسن",
      email: "mohammed@example.com",
      phone: "+963999789012", 
      subject: "طلب معلومات إضافية",
      message: "أحتاج معلومات أكثر عن المشاريع المتاحة في منطقة وسط المدينة",
      date: "2024-01-13",
      isRead: true
    }
  ];

  const handleReply = (messageId: number) => {
    if (!replyText.trim()) return;
    
    toast({
      title: "تم إرسال الرد بنجاح",
      description: "تم إرسال الرد إلى العميل"
    });
    setReplyText("");
    setSelectedMessage(null);
  };

  const handleDelete = (messageId: number) => {
    toast({
      title: "تم حذف الرسالة",
      description: "تم حذف الرسالة بنجاح"
    });
  };

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar />
      
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">الرسائل</h1>
          <p className="text-muted-foreground">إدارة رسائل العملاء</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <div className="lg:col-span-2 space-y-4">
            {messages.map((message) => (
              <Card 
                key={message.id} 
                className={`cursor-pointer transition-colors ${
                  selectedMessage === message.id ? 'ring-2 ring-primary' : ''
                } ${!message.isRead ? 'bg-blue-50' : ''}`}
                onClick={() => setSelectedMessage(message.id)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        {message.name}
                        {!message.isRead && (
                          <Badge className="bg-blue-600">جديد</Badge>
                        )}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {message.email} • {message.phone}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">{message.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">{message.subject}</h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {message.message}
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedMessage(message.id);
                      }}
                    >
                      <Reply className="h-4 w-4 ml-1" />
                      رد
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(message.id);
                      }}
                    >
                      <Trash2 className="h-4 w-4 ml-1" />
                      حذف
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Reply Section */}
          <div>
            {selectedMessage ? (
              <Card>
                <CardHeader>
                  <CardTitle>الرد على الرسالة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {(() => {
                    const message = messages.find(m => m.id === selectedMessage);
                    return message ? (
                      <>
                        <div className="bg-muted p-3 rounded">
                          <h4 className="font-medium">{message.subject}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {message.message}
                          </p>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            ردك على {message.name}
                          </label>
                          <Textarea
                            rows={4}
                            placeholder="اكتب ردك هنا..."
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                          />
                        </div>
                        
                        <Button 
                          onClick={() => handleReply(selectedMessage)}
                          className="w-full"
                          disabled={!replyText.trim()}
                        >
                          إرسال الرد
                        </Button>
                      </>
                    ) : null;
                  })()}
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="py-8 text-center">
                  <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">اختر رسالة للرد عليها</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMessages;