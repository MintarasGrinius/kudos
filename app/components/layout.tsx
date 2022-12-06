import type { ActionFunction } from '@remix-run/node'

export function Layout({ children }: { children: React.ReactNode }) {
  return <div className='h-screen w-full bg-blue-600 font-mono'>{children}</div>
}

export const action: ActionFunction = async ({ request }) => {}
