import React from 'react';
import PageHeader from '../components/PageHeader';
import { Check, Target, Award } from 'lucide-react';

function About() {
  const leadershipTeam = [
    {
      name: 'His Eminence, Dr. Oliver Ali Aba, JP',
      role: 'Prelate',
      image: 'https://pbs.twimg.com/media/GOlWKunXIAEKJy-.jpg'
    },
    {
      name: 'Rt. Rev. (Dr.) Babatunde Taiwo ',
      role: 'Secretary of Conference',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPagVc-029TyHPijdp-wDJhXuvS0n13uj6fg&s'
    },
    {
      name: 'Rt. Rev. Inyang O. Effiong',
      role: 'Connexional Secretary for Evangelism & Discipleship',
      image: 'https://scontent.fabb1-2.fna.fbcdn.net/v/t39.30808-6/484818765_652174327745245_1621496679607893532_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE6W-mGqSCAEGZe_LcLCHbqeMPw55Pg6LN4w_Dnk-Dosxybk_MUppqoKF53DYWZ1Rn7lNQiWV3jedijJEQoPNFu&_nc_ohc=MV1bTKLLb80Q7kNvwEVikS5&_nc_oc=AdmGIuO_fdICF3zs6buW25qNjQWGhGKFCeOPG1S2MZVt3zQ9TLaM0ragmv3YEa0YjmM&_nc_zt=23&_nc_ht=scontent.fabb1-2.fna&_nc_gid=uTqGeVoTDMA4PaK9pj5OFg&oh=00_AfO9j3AmNpDEnXpEi7190VAiXr7-LqpS8VpLnHKlT8DvsA&oe=6851D2C2'
    },
    {
      name: 'Sir (Ide) Ifeanchukwu Okechukwu, KJW',
      role: 'Conference Lay President',
      image: 'https://scontent.fabb1-3.fna.fbcdn.net/v/t39.30808-6/493849092_24212595518343196_1031876478300573204_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=104&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEuaez6Cl5Hu-TimeyadN_XjBR2OB64nlqMFHY4HrieWgcYry4ZDBTkWhoQya8_Wurv2j2AM8v9wstAY0afTgX1&_nc_ohc=ZM60MpjSHDQQ7kNvwGjsAV7&_nc_oc=AdmmsFWnISx1q4IjDNn8JhxRu-wFkX09N269WFpgoa3y97LNwkW6N6gzd3-awXlHo1g&_nc_zt=23&_nc_ht=scontent.fabb1-3.fna&_nc_gid=IqUex8ft0NfxO0moFfuCfA&oh=00_AfMy6ZN59XpEVzaGXJvwzFaqqbHlQdPZsmbVUI0ZQ06zYA&oe=6851D227'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="John Wesley and Methodisim" 
        description="Learn about the founder and Methodisim."
        backgroundImage="https://ecclesiasticalheraldry.weebly.com/uploads/5/7/2/2/57220915/methodist-church-nigeria-emblem_orig.png"
        
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">🕰️ Timeline: The History of John Wesley & Methodism</h2>
              <p className="text-neutral-700 mb-4">📍 <b> 1703 </b>  Birth of John Wesley John Wesley is born on June 17, 1703, in Epworth, England, 
                into a devout Christian family. He would become the 15th child of Rev. Samuel and Susanna Wesley.<p/>
            <p></p>
            
              <p>
              📍 <b> 1729 </b> – "Holy Club" at Oxford While at Oxford University, John Wesley, along with his brother Charles Wesley, 
              forms a small group devoted to Bible study, prayer, fasting, and service. Their strict discipline earns them the nickname “Methodists.”
              </p>
              <p>
                📍 <b> 1735 </b> – Mission Trip to America John Wesley sails to Savannah, Georgia, for 
                missionary work among Native Americans, but the trip is spiritually disappointing. 
                He returns to England seeking deeper faith.
              </p>
              <p>
                📍 <b>May 24, 1738 </b> – Aldersgate Experience
                At a meeting in Aldersgate Street, London, Wesley has a spiritual awakening:
                “I felt my heart strangely warmed… I did trust in Christ, Christ alone for salvation.”
                This moment ignites the Methodist revival movement.
                </p>
                <p>
                  📍 <b> 1739 </b> – Open-Air Preaching Begins 
                  Wesley begins preaching outdoors to large crowds, 
                  especially among the poor and working class, who felt neglected by the traditional church.
                  </p>
                  <p>
                    📍 <b> 1742 </b> – Class Meetings Start Wesley organizes converts into small groups 
                    called “class meetings” for prayer, support, accountability, 
                    and discipleship — a key feature of early Methodism.
                    </p>
                    <p>
                      📍 <b> 1784 </b> – Methodism in America 
                      Wesley ordains ministers for the U.S. after the American Revolution, 
                      leading to the formation of the Methodist Episcopal Church — the first official Methodist denomination.
                      </p>
                      <p>
                        📍 <b> March 2, 1791 </b> – Death of John Wesley

                      John Wesley dies at age 87 in London. His last words were:

                          “The best of all is, God is with us.”
                        </p>

                        <p>
                          📍 <b> 1842 </b> – Methodism Arrives in Nigeria
                          Rev. Thomas Birch Freeman, a missionary of African-European descent, 
                          brings Methodism to Nigeria, landing in Badagry. 
                          This marks the beginning of Methodist Church Nigeria.
                          </p>
                          <p>
                            📍 <b> Today </b> – Global Methodist Family
                          Methodism now exists in over 130 countries, with millions of members worldwide. It remains committed to:

                              Spiritual growth

                              Evangelism

                              Education

                              Justice

                              Holiness and service
                            </p>
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/8108518/pexels-photo-8108518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Group photo of youth fellowship members" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary-700 text-white py-2 px-4 rounded shadow-md">
                  <p className="text-lg font-bold">Est. 1995</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">Methodist Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Target className="text-primary-700" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Mission</h3>
              <p className="text-neutral-700 mb-4">
                "To spread scriptural holiness and transform society through the power of the Holy Spirit."
              </p>
              <ul className="space-y-2">

                {['Evangelism and Discipleship', 'Holiness of Heart and Life', 'Service to Humanity', 
                'Justice and Righteousness', 'Youth and Leadership Development', 'Empowerment by the Holy Spirit'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={18} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Award className="text-primary-700" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Vision</h3>
              <p className="text-neutral-700 mb-4">
                "To be a spiritually vibrant, Christ-centered, and socially relevant Church, reaching the world with the transforming message of Jesus Christ."
              </p>
              <ul className="space-y-2">
                {['Spiritually Vibrant Church', 'Christ-Centered Living and Teaching', 'Social Relevance and Community Impact', 
                'Global Evangelistic Outreach', 'Transforming Message of Jesus Christ'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={18} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">Our Core Values</h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              These values guide Methodists in faith, character, leadership, and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Faith', text: 'We believe in Jesus Christ as Lord and Savior—the foundation of our life and message.' },
              { title: 'Holiness and Righteous Living', text: 'We pursue personal and social holiness, living a life that reflects God"s character.' },
              { title: 'Love and Compassion', text: 'We are called to love God and others, showing mercy, kindness, and care to all people.' },
              { title: 'Evangelism and Mission', text: 'We are committed to spreading the Gospel and making disciples across the world.' },
              { title: 'Service to Humanity', text: 'We invest in education, healthcare, and the well-being of our communities.' },
              { title: 'Worship and Sacraments', text: 'We honor God through vibrant worship and the faithful practice of Holy Communion and Baptism.' },
              { title: 'Unity and Fellowship', text: 'We promote peace, unity, and strong Christian fellowship among believers.' },
              { title: 'Stewardship and Responsibility', text: 'We are faithful stewards of God’s gifts—our time, talents, resources, and the environment.' },
            ].map((value, index) => (
              <div key={index} className="bg-neutral-50 p-6 rounded-lg border-t-4 border-primary-700">
                <h3 className="text-xl font-bold text-primary-800 mb-3">{value.title}</h3>
                <p className="text-neutral-700">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-primary-100 text-primary-800 font-medium rounded-full text-sm mb-4">
              Meet The Present National Leadership Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">Leadership Team</h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Our dedicated leaders 
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-primary-800 mb-1">{leader.name}</h3>
                  <p className="text-neutral-600">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-700 mb-4">
              Our leadership team works collaboratively in serving the Lord
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-primary-700 text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Fellowship</h2>
            <p className="text-xl text-neutral-200 mb-8">
              We welcome all young people who are seeking to grow in their faith...
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn bg-white text-primary-700 hover:bg-neutral-100">
                Contact Us
              </a>
              <a href="/events" className="btn bg-secondary-600 text-white hover:bg-secondary-700">
                Attend an Event
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
