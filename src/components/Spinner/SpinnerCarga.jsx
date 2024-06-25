import { Spinner } from 'react-bootstrap';

const SpinnerCarga = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '200px' }}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Cargando...</span>
            </Spinner>
        </div>
    );
}

export default SpinnerCarga;