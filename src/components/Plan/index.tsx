import logo from '../../assets/eclipse.png'
import imagePlan from '../../assets/square.png'
import './styles.css';

export function Plan(){
    return (
        <div className='content'>
            <div className="planDetails">
                <img src={logo} height={30} alt="" />
                <h2>Subscribe and start saving your money today!</h2>
                <div className="planType">
                    <div className='imagePlan'>
                        <img src={imagePlan} alt="" />
                    </div>
                    <div className='planChosen'>
                        <span>Professional Plan</span>
                        <p>$96 / month</p>
                    </div>
                </div>
            </div>
            <div className="planDescription">
                <ul>
                    <li>All features in <strong>basic included</strong></li>
                    <li>Easy and flexible business with <strong>invoice management</strong></li>
                    <li>Full time access</li>
                    <li><strong>20 TB</strong> cloud storage</li>
                </ul>

                <div className='modifyPlanLink'>
                    <a href="">Modify plan</a>
                </div>
            </div>
        </div>
    )
}