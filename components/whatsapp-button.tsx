'use client'

export function WhatsAppButton() {
  const phoneNumber = '919999999999' // Replace with actual Ghaziabad gym number
  const message = "Hi, I want to know more about your services"
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
      title="Contact us on WhatsApp"
    >
      <svg
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.732 5.369 2.124 7.659L2.513 22l8.148-2.138c2.215 1.201 4.708 1.835 7.226 1.835 5.387 0 9.797-4.414 9.797-9.802 0-2.605-.636-5.212-1.841-7.517-1.204-2.305-2.916-4.354-4.964-5.724-2.049-1.37-4.347-2.109-6.753-2.109-2.405 0-4.703.739-6.752 2.109z"/>
      </svg>
    </a>
  )
}
