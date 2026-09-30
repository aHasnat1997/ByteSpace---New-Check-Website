import {
  Tabs as TabsPrimitive,
  TabsList as TabsListPrimitive,
  TabsTrigger as TabsTriggerPrimitive,
  TabsContent as TabsContentPrimitive,
  TabsContents as TabsContentsPrimitive,
  TabsHighlight as TabsHighlightPrimitive,
  TabsHighlightItem as TabsHighlightItemPrimitive,
  type TabsProps as TabsPrimitiveProps,
  type TabsListProps as TabsListPrimitiveProps,
  type TabsTriggerProps as TabsTriggerPrimitiveProps,
  type TabsContentProps as TabsContentPrimitiveProps,
  type TabsContentsProps as TabsContentsPrimitiveProps,
} from "@/components/animate-ui/primitives/radix/tabs"
import { cn } from "@/lib/utils"

type TabsProps = TabsPrimitiveProps

function Tabs({ className, ...props }: TabsProps) {
  return (
    <TabsPrimitive
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

type TabsListProps = TabsListPrimitiveProps

function TabsList({ className, ...props }: TabsListProps) {
  return (
    <TabsHighlightPrimitive className="absolute inset-0 z-0 rounded-full bg-secondary">
      <TabsListPrimitive
        className={cn(
          "inline-flex w-fit items-center justify-center gap-x-4 gap-y-5.25",
          className
        )}
        {...props}
      />
    </TabsHighlightPrimitive>
  )
}

type TabsTriggerProps = TabsTriggerPrimitiveProps

function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  return (
    <TabsHighlightItemPrimitive value={props.value}>
      <TabsTriggerPrimitive
        className={cn(
          "relative z-10 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-muted px-4 py-3 label-m whitespace-nowrap text-foreground transition-colors duration-500 ease-in-out focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-transparent [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className
        )}
        {...props}
      />
    </TabsHighlightItemPrimitive>
  )
}

type TabsContentsProps = TabsContentsPrimitiveProps

function TabsContents(props: TabsContentsProps) {
  return <TabsContentsPrimitive {...props} />
}

type TabsContentProps = TabsContentPrimitiveProps

function TabsContent({ className, ...props }: TabsContentProps) {
  return (
    <TabsContentPrimitive
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContents,
  TabsContent,
  type TabsProps,
  type TabsListProps,
  type TabsTriggerProps,
  type TabsContentsProps,
  type TabsContentProps,
}
