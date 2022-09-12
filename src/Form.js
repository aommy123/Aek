import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      age: "",
      address: "",
      phoneNo: "",
      lastname: "",
      Birthday: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { email, name, age, address, phoneNo, lastname, Birthday } =
      this.state;
    event.preventDefault();
    alert(`
	____Your Details____\n
	Email : ${email}
	Name : ${name}
	Age : ${age}
	Address : ${address}
	Phone No : ${phoneNo}
  lastname : ${lastname}
  Birthday: ${Birthday}
	`);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h1>
            <center>
              <header>กรอกข้อมูล</header>
            </center>
          </h1>
        </div>

        <h3>
          <center>
            <table>
              <th>
                <tr>
                  <label htmlFor="name">ชื่อ:</label>
                  <input
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />

                  <label htmlFor="lastname">นามสกุล:</label>
                  <input
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.handleChange}
                  />

                  <label for="birthday">ว,ด,ป:</label>
                  <input type="date" id="birthday" name="birthday" />
                </tr>
              </th>
            </table>
          </center>
        </h3>

        <div>
          <h3>
            <center>
              <table>
                <th>
                  <tr>
                    <label htmlFor="email">อีเมล</label>
                    <input
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </tr>
                </th>
              </table>
            </center>
          </h3>
        </div>

        <div>
          <h3>
            <center>
              <table>
                <th>
                  <tr>
                    <label htmlFor="age">อายุ</label>
                    <input
                      name="age"
                      value={this.state.age}
                      onChange={this.handleChange}
                    />
                  </tr>
                </th>
              </table>
            </center>
          </h3>
        </div>

        <div>
          <h3>
            <center>
              <table>
                <th>
                  <tr>
                    <label htmlFor="address">ที่อยู่</label>
                    <input
                      name="address"
                      value={this.state.address}
                      onChange={this.handleChange}
                    />
                  </tr>
                </th>
              </table>
            </center>
          </h3>
        </div>

        <div>
          <h3>
            <center>
              <table>
                <th>
                  <tr>
                    <label htmlFor="phoneNo">เบอร์โทรศัพท์</label>
                    <input
                      name="phoneNo"
                      value={this.state.phoneNo}
                      onChange={this.handleChange}
                    />
                  </tr>
                </th>
              </table>
            </center>
          </h3>
        </div>

        <div>
          <center>
            <button class="pushable">
              <span class="front">กดยืนยัน</span>
            </button>
          </center>
        </div>

        <div>
          <center>
          <a href="https://www.facebook.com/profile.php?id=100009727834772">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/900px-Facebook_Logo_%282019%29.png"></img>
            </a>
          </center>
        </div>

      </form>
    );
  }
}

export default Form;
