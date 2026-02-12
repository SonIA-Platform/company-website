import { useState, useEffect } from 'react'

const CONSENT_KEY = 'sonia-cookie-consent'

export type ConsentValue = 'accepted' | 'rejected' | null

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(CONSENT_KEY)
    if (!consent) {
      // Small delay for better UX
      setTimeout(() => {
        setShowBanner(true)
        setTimeout(() => setIsVisible(true), 50)
      }, 1000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setIsVisible(false)
    setTimeout(() => setShowBanner(false), 300)
    
    // Initialize GA4 after consent
    if (window.initGA4AfterConsent) {
      window.initGA4AfterConsent()
    }
  }

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, 'rejected')
    setIsVisible(false)
    setTimeout(() => setShowBanner(false), 300)
  }

  if (!showBanner) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-card border-t shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                🍪 Uso de cookies
              </h3>
              <p className="text-sm text-muted-foreground">
                Utilizamos cookies y tecnologías similares para analizar el tráfico de nuestro
                sitio web mediante Google Analytics. Estas cookies nos ayudan a entender cómo los
                visitantes interactúan con nuestra web para mejorar nuestros servicios.{' '}
                <a
                  href="/politica-privacidad"
                  className="text-primary hover:underline font-medium"
                >
                  Más información
                </a>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 md:ml-6">
              <button
                onClick={handleReject}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg transition-colors"
              >
                Rechazar
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Aceptar cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function to check if consent was given
export const hasAnalyticsConsent = (): boolean => {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(CONSENT_KEY) === 'accepted'
}

// Helper function to get consent value
export const getConsentValue = (): ConsentValue => {
  if (typeof window === 'undefined') return null
  const value = localStorage.getItem(CONSENT_KEY)
  return value === 'accepted' || value === 'rejected' ? value : null
}

// Helper function to reset consent (for testing or user preference change)
export const resetConsent = () => {
  localStorage.removeItem(CONSENT_KEY)
  window.location.reload()
}

// Extend Window type
declare global {
  interface Window {
    initGA4AfterConsent?: () => void
  }
}
