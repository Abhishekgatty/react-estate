import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface EnquiryFormProps {
  onSubmit: (data: any) => void;
  onCancel?: () => void;
}

export default function EnquiryForm({ onSubmit, onCancel }: EnquiryFormProps) {
  const [enquiryType, setEnquiryType] = useState<"buy" | "sell">("buy");
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    name: "",
    referredBy: "",
    mobile: "",
    location: "",
    budget: "",
    sellingRate: "",
    remarks: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, type: enquiryType });
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Enquiry</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={enquiryType} onValueChange={(v) => setEnquiryType(v as "buy" | "sell")}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="buy" data-testid="tab-buy">Buy</TabsTrigger>
            <TabsTrigger value="sell" data-testid="tab-sell">Sell</TabsTrigger>
          </TabsList>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => updateField("date", e.target.value)}
                data-testid="input-date"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                required
                data-testid="input-name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="referredBy">Referred By</Label>
              <Input
                id="referredBy"
                value={formData.referredBy}
                onChange={(e) => updateField("referredBy", e.target.value)}
                data-testid="input-referred-by"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number *</Label>
              <Input
                id="mobile"
                type="tel"
                value={formData.mobile}
                onChange={(e) => updateField("mobile", e.target.value)}
                required
                data-testid="input-mobile"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => updateField("location", e.target.value)}
                required
                data-testid="input-location"
              />
            </div>

            <TabsContent value="buy" className="mt-0 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="budget">Budget</Label>
                <Input
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => updateField("budget", e.target.value)}
                  placeholder="e.g., $500,000"
                  data-testid="input-budget"
                />
              </div>
            </TabsContent>

            <TabsContent value="sell" className="mt-0 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="sellingRate">Selling Rate</Label>
                <Input
                  id="sellingRate"
                  value={formData.sellingRate}
                  onChange={(e) => updateField("sellingRate", e.target.value)}
                  placeholder="e.g., $750,000"
                  data-testid="input-selling-rate"
                />
              </div>
            </TabsContent>

            <div className="space-y-2">
              <Label htmlFor="remarks">Remarks</Label>
              <Textarea
                id="remarks"
                value={formData.remarks}
                onChange={(e) => updateField("remarks", e.target.value)}
                rows={3}
                data-testid="input-remarks"
              />
            </div>

            <div className="flex gap-2 pt-4">
              {onCancel && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={onCancel}
                  className="flex-1"
                  data-testid="button-cancel"
                >
                  Cancel
                </Button>
              )}
              <Button type="submit" className="flex-1" data-testid="button-submit">
                Create Enquiry
              </Button>
            </div>
          </form>
        </Tabs>
      </CardContent>
    </Card>
  );
}
