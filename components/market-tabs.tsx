import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SuggestionTable } from './us-suggestion-table'
import { EuSuggestionTable } from './eu-suggestion-table'
import { CryptoSuggestionTable } from './crypto-suggestion-table'

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
        <div className="p-4 w-full rounded-md bg-white dark:bg-muted">
          <EuSuggestionTable />
        </div>
      </TabsContent>
      <TabsContent value="crypto">
        <div className="p-4 rounded-md w-full bg-white dark:bg-muted">
          <CryptoSuggestionTable />
        </div>
      </TabsContent>
    </Tabs>
  )
}
