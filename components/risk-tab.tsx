import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function RiskTab() {
  return (
    <Tabs defaultValue="US" className="w-full">
      <TabsList className="grid w-1/2 grid-cols-2">
        <TabsTrigger value="Volatile" className="volatile-tab border">
          Volatile
        </TabsTrigger>
        <TabsTrigger value="Stable" className="stable-tab border">
          Stable
        </TabsTrigger>
      </TabsList>
      <TabsContent value="US">
        <div className="w-full h-12 bg-white"></div>
      </TabsContent>
      <TabsContent value="EU">
        <div className="w-full h-12 bg-white"></div>
      </TabsContent>
    </Tabs>
  )
}
