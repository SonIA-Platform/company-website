import { Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

import { trackEmailClick } from '@/utils/analytics'

const Header = () => {
  const handleEmailClick = () => {
    trackEmailClick('hola@sonia-hr.com')
  }

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-[960px] items-center justify-between gap-4 px-5 py-[18px] max-sm:flex-col max-sm:items-start">
        <Link to="/" className="text-[1.75rem] font-extrabold tracking-[-0.03em] text-primary no-underline">
          SonIA<span className="font-light text-muted-foreground"> HR</span>
        </Link>
        <a
          href="mailto:hola@sonia-hr.com"
          onClick={handleEmailClick}
          className="inline-flex items-center gap-2 rounded-[10px] bg-primary px-4 py-2.5 text-[0.95rem] font-semibold text-white no-underline transition hover:opacity-90"
        >
          <Mail className="h-4 w-4" /> Contactar
        </a>
      </div>
    </header>
  )
}

export default Header
