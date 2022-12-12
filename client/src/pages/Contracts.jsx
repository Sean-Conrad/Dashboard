import contractReqs from "../contractReqs";
import Requests from "../components/Requests";




export default function Contracts() {

function createCard(request) {
  return (
    <Requests
      key={request.id}
      name={request.name}
      address={request.address}
      tel={request.phone}
      email={request.email}
      date={request.date}
      subject={request.subject}
      message={request.message}
    />
  );
}


  return (
    <div className="wrapper">
      <div className="container-fluid row">
        <div class="col-sm-6">{contractReqs.map(createCard)}</div>
      </div>
    </div>
  );
}
