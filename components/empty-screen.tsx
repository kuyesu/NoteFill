import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Programs offered ',
    message: `What programs are offered at the university?`
  },
  {
    heading: 'Admission and academic year',
    message: 'Is the university still admitting this year'
  },
  {
    heading: 'Campus life',
    message: `what is life like at Mbarara University`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border  bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">🐼 Smiling Pandas</h1>
        <p className="mb-2 leading-normal text-justify text-muted-foreground">
          We unravel the intricate interplay between pedagogy, technology, and
          student expectations and inquiries, shedding light on the intricate
          journey that institutions of higher learning must undertake to remain
          effective and relevant in this transformative era.
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
