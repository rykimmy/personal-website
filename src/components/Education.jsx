import EducationItems from './EducationItems'
import location from '../../location.png'
import date from '../../date.png'


function Education() {

    return (
        <div>
            <h2 className="sectionTitle">Education</h2>
            <h3 className="sectionSubtitle">My academic background.</h3>
            {EducationItems.map((item, index) => {
                return (
                    <div className="educationItem" key={item.school}>

                        {/* IMAGE */}
                        <div>
                            <img src={item.logo} className="educationImg" />
                        </div>

                        {/* SCHOOL INFO */}
                        <div className="infoContainer">
                            <h4 className="itemTitle">{item.school}</h4>
                            <h5 className="itemDescription">{item.degree}</h5>

                            <div classname="itemDetails">
                                <div className="detailItem">
                                    <img className="detailIcon" src={location} />
                                    <h5 className="detail">{item.location}</h5>
                                </div>
                                <div className="detailItem">
                                    <img className="detailIcon2" src={date} />
                                    <h5 className="detail">{item.time}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Education;