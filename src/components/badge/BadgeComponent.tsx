import {FC} from 'react';
import './BadgeComponent.css';
import IBadgeInfo from '../types/IBadgeInfo';

interface BadgeComponentProps {
    badge : IBadgeInfo
}
 
const BadgeComponent: FC<BadgeComponentProps> = ( props ) => {

    const { badge } = props;

    return ( 
        <article className='badge-container is-info'>
            <figure className='badge-figure'>
                <img src={badge.certificateImageUrl} alt={badge.certificateName} className='badge-image' />
            </figure>
            <div className="badge-body">
                <h4 className='badge-title'>
                    {badge.certificateName}
                </h4>
                <div className="badge-issuer">
                    <b>Issued by</b> {badge.issuerName}
                </div>
            </div>
        </article>
     );
}
 
export default BadgeComponent;