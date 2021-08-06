import './Showcard.css';

function Showcard() {
    return (
        <div>
            <div className="card-post">
               <div className="card-post-detail">
                   <div className="card-post-image">
                      <img src="https://images.unsplash.com/photo-1625247666944-c93f0ee3da9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80" alt="" />
                   </div>
                   <div className="card-post-content">
                       <div className="card-post-text">
                           <h2 className="card-post-title">Title will be show here</h2>
                           <p className="card-post-date">Date: 12 July 2021</p>
                       </div>
                       <div className="card-post-description">
                           <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing 
                            Lorem ipsum dolor, sit amet consectetur adipisicing 
                            elit. Ipsa, beatae!</p>
                       </div>
                       <div className="card-post-category">
                           <button className="category">category</button>
                       </div>
                   </div>
               </div>
           </div> 
        </div>
    );

};

export default Showcard;