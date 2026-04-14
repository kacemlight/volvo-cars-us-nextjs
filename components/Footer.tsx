import type { FooterSection } from '@/lib/types'

interface FooterProps {
  data: FooterSection
}

export default function FooterComponent({ data }: FooterProps) {
  return (
    <footer className="bg-volvo-blue text-white" aria-label="Footer">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        {/* Footer columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {data.columns.map((column) => (
            <div key={column.columnTitle}>
              <h4 className="text-lg font-bold mb-4">
                {column.columnTitle}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      className="text-gray-200 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-volvo-accent my-8"></div>

        {/* Copyright and legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-200">
            {data.copyrightText}
          </p>
          <ul className="flex flex-wrap justify-center md:justify-end gap-6">
            {data.legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  className="text-sm text-gray-200 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}