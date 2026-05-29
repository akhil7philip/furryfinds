'use client'

import { useState } from 'react'

export default function LoginPage() {
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const input = form.passcode.value

    if (input === 'rion') {
      document.cookie = 'site-auth=rion; path=/; max-age=31536000; SameSite=Lax'
      window.location.href = '/'
    } else {
      setError(true)
      form.passcode.value = ''
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Furry Finds</h1>
        <p className="text-sm text-gray-500 mb-6">Enter the passcode to continue</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="passcode" className="sr-only">Passcode</label>
            <input
              id="passcode"
              name="passcode"
              type="password"
              autoComplete="off"
              placeholder="Passcode"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">Incorrect passcode. Please try again.</p>
          )}

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  )
}
