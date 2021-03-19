import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      
    }
  }
  //destrutures
  
  //  console.log(catogory)
  // const [users, setUser] = useState([]);

  componentDidMount() {
    this.loadUsers();
  }

  componentDidUpdate(prevProps){
     if(this.props.catogory !== prevProps.catogory) {
            this.setState({
                users: []
            })
            this.loadUsers();
        }
      
  }

  // useEffect(() => {
  //   loadUsers();

  // }, []);

    loadUsers =  () => { 
    const { catogory } = this.props;
    if(window.localStorage.getItem('starters') == null){
      window.localStorage.setItem('starters','[]')
      window.localStorage.setItem('maincourse','[]')
      window.localStorage.setItem('deserts','[]')
      window.localStorage.setItem('drinks','[]')
    } 
    let arr = JSON.parse(window.localStorage.getItem(`${catogory}`))
    const resultArr = arr.map(({image, ...rest}) => ({...rest}));
    this.setState({
      users: resultArr
    })
  };
  
  
  render() {
    const { users } = this.state;
    const { catogory } = this.props;
    return (
      
      <div className="container">
        <div className="py-4">
          <h1>{catogory}</h1>
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">S.no</th>
                <th scope="col">Food Name</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th>Availability</th>
                <th>Action</th>
                
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index +1}>
                  <th scope="row">{index +1}</th>
                  <td>{user.food_name}</td>
                  <td>
                    <img className = "profileImagePic" src = {user.imageURL} alt = "Food picture" style = {{
                          height: "100px",
                          width: "100px",
                      }}/>
                  </td>
                  <td>${user.price}</td>
                  <td>{user.status}</td>
                  <td>                                  
                    <Link
                      className="btn btn-outline-primary mr-2"
                      to={`/business/profile/primary_menu/${catogory}/edit/${user.food_name }`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() =>   
                        
                        
                        {
                          
                          let arr=JSON.parse(localStorage.getItem(catogory))
                          console.log(typeof Object.keys(arr).length)
                          if(Object.keys(arr).length <= 1){
                            localStorage.setItem(catogory,'[]')
                            this.setState({ users:[]})
                          }if(Object.keys(arr).length > 1){
                            const index = arr.findIndex(x => x.food_name === user.food_name && x.price ===user.price);
  
                                if (index !== undefined) arr.splice(index, 1);
                                localStorage.setItem(catogory,JSON.stringify(arr))
                                this.setState({ users:arr})
  
                          }
                     }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
};

export default Home;
