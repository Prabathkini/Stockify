import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SuggestionTable } from './suggestion-table'

export function TabsDemo() {
  return (
    <Tabs defaultValue="US" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="US">US</TabsTrigger>
        <TabsTrigger value="EU">EU</TabsTrigger>
        <TabsTrigger value="crypto">Crypto</TabsTrigger>
      </TabsList>
      <TabsContent value="US">
        <div className="p-4 rounded-md w-full bg-white dark:bg-muted">
          <SuggestionTable />
        </div>
      </TabsContent>
      <TabsContent value="EU">
        <div className="w-full h-12 bg-white dark:bg-muted"></div>
      </TabsContent>
      <TabsContent value="crypto">
        <div className="w-full h-12 bg-white dark:bg-muted"></div>
      </TabsContent>
    </Tabs>
  )
}
