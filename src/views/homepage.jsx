import { data } from "../service/data.service"

export const Homepage = () => {
  const infoCardsData = data.getInfo()
  const storiesCardsDate = data.getStories()

  return (
    <div className="homepage-container">
      <section className="hero-container">
        <div className="hero-content-container">
          <h1 className="title-container">
            Find the best <span className="highlight-pink">talent</span>
          </h1>
          <div className="text-container">
            <p>
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </p>
          </div>
        </div>
      </section>

      <section className="short-info-container">
        <div className="short-info-content-container">
          <h1 className="info-title">
            Build & manage distributed teams like no one else.
          </h1>
          <div className="info-cards-container">
            {infoCardsData.map((card, idx) => {
              return (
                <div className="info-card" key={idx}>
                  <img src={card.img} alt="" />
                  <div className="text-container">
                    <h3 className="title highlight-pink">{card.title}</h3>
                    <p className="text">{card.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="success-stories-container">
        <div className="success-stories-content-container">
          <h1 className="stories-title">
            Delivering real result for top companies.Some of out{" "}
            <span className="highlight-blue">success stories.</span>
          </h1>
          <div className="stories-cards-container">
            {storiesCardsDate.map((story, idx) => {
              return (
                <div className="story-card">
                  <p>{story.text}</p>
                  <h3 className="name highlight-blue">{story.name}</h3>
                  <h3 className="role">{story.role}</h3>
                  <img src={story.img} alt="" />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="contact-container">
        <div className="contanct-content-container">
          <h1 className="title">Ready to get started?</h1>
          <h3 className="contact-btn">contact us</h3>
        </div>
      </section>
    </div>
  )
}
