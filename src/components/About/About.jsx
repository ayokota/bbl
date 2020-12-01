import React, { Component } from "react"
import { connect } from "react-redux";
import "./About.scss";

class About extends Component {

    render() {
        return (
            <div className="component-about container-fluid">
                <div className="who-we-are">
                    <div className="title">Who we are</div>
                    <div className="story">
                        We want every students to succeed by providing a platform that'll connect tutors and students in need.
                    </div>
                </div>
                <div className="origin-story">
                    <div className="title"> Our Origin Story </div>
                    <div className="story">
                        <p>
                            Bolster Network was honestly a product of the combination of factors that came into play in 2020; mainly COVID-19 and the way it influenced the way we had to live our lives. Well, it’s more accurate to say that 2020 was the catalyst needed to catapult us into action.
                        </p>

                        <p>
                            Anyone who has gone through the public school system can probably point out a problem with it. They can probably point out a lot of them, if you give them the chance. This gave rise to the thought that was potentially the seed of an idea that grew into Bolster Network; that the majority of children are not set up to succeed. I was a substitute teacher; I earned a Master’s Degree, and it’s the same through and through. True, we all know there are still some people out there who are set, who are going to be handed six figure salary jobs, no matter what they do (“What? No way! There are rules and regulations preventing that kind of nepotism!” HAH, oh yeah) . However, that’s not the case for everyone.
                        </p>

                        <p>
                            This is where the Bolster Network was born. I had this plan in my head, sort of a daydream that got more and more detailed over the days and weeks and months. It had a simple premise; a network of people that was designed around helping the youth be best prepared for adulthood. This network would be self-sustaining; as children grew older, they would then be the ones preparing the next generation, passing down the knowledge they had received, adding with the wisdom and knowledge they had gained in their experiences to the collective knowledge base, connecting other members of the network with opportunities that would build towards their goals, and so the cycle would go.
                        </p>

                        <p>
                            Now, all this was more of a fantasy than a plan before the lockdown of 2020. As much as we all know “Life isn’t fair,” it seemed like such an injustice that some people, some young people, some children were going to get screwed by life just because they happened to be born at a time in which COVID-19 was going to ravage the world. I spent a lot of time thinking about my little daydream, and what it could do.
                        </p>

                        <p>
                            The lockdown started, and I started looking into various aspects of what it would take to make this idea a reality. I knew Akiyo, one of my best friends and roommates from college, was a master coder and software engineer, so I began asking his advice. Akiyo had insights into various fields that I was woefully ignorant of, so his perspective was a game changer. His perspective was divergent from my own, but in a complementary way. When I would propose an idea, his thoughts on it, his questions about it, would shed light on it from an angle I hadn’t considered, and bolster (hah, see what I did there?) the potential of it. One question led to another, which led to a conversation that evolved into a plan. That plan took us to where we are today; working to empower the youth by providing supplemental education, professional development, and additional opportunities for those that have been negatively impacted by the effects of COVID-19 in the hopes of balancing the scales for them.
                        </p>

                        <p>
                            -- <br /><br />
                            Brett Imel <br />
                            Founder & CEO <br />
                            Bolster Network
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(About);