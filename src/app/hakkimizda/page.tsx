export default function Hakkimizda() {
  const teamMembers = [
    {
      name: "Ahmet Yılmaz",
      role: "CEO & Kurucu",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Ayşe Demir",
      role: "Tasarım Direktörü",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Mehmet Kaya",
      role: "Teknik Direktör",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Hakkımızda</h1>
            <p className="text-xl">
              Yenilikçi çözümlerle geleceği şekillendiriyoruz
            </p>
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Vizyonumuz</h2>
            <p className="text-gray-600 mb-8">
              Teknoloji dünyasında öncü olmak ve müşterilerimize en iyi dijital çözümleri sunmak için
              sürekli kendimizi geliştiriyoruz. İnovasyon ve kalite bizim için sadece bir hedef değil,
              bir yaşam tarzıdır.
            </p>
            <h2 className="text-3xl font-bold mb-6">Misyonumuz</h2>
            <p className="text-gray-600">
              Müşterilerimizin dijital dönüşüm yolculuğunda güvenilir bir partner olmak ve onların
              başarılarına katkıda bulunmak için çalışıyoruz. Her projede en yüksek kalite
              standartlarını hedefliyoruz.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Yıllık Deneyim</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Mutlu Müşteri</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Tamamlanan Proje</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Uzman Ekip</div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ekibimiz</h2>
            <p className="text-gray-600">
              Profesyonel ve deneyimli ekibimizle hizmetinizdeyiz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 