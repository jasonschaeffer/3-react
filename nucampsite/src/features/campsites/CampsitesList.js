import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { Col, Row } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";

const CampsitesList = () => {
    return (
        <Card>
            <CardImg 
                width='100%'
                src={props.campsite.image}
                alt={props.campsite.name}
            />
            <CardImgOverlay> 
                <CardTitle>{props.campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}