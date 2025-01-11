body {
  margin-top: 50px;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f2f3f4;
}

.todo-upper {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px;
}

li {
  border-radius: 15px;
 border-width:15px;
 border-color: aqua;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  justify-content: space-between;
  margin: 20px;
  padding: 20px;
}

.todo-container {
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#task-list {
  list-style-type: none;
  padding: 0;
}

.todo-header {
  font-size: 26px;
  font-weight: 400;
}

#todo-input {
  padding: 5px 10px;
  font-size: 16px;
}

#add-button {
  padding: 5px 35px;
  font-size: 16px;
  background-color: #000000;
  color: white;
  border: none;
  cursor: pointer;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 300;
  border-radius: 6px;
}

.delete-btn {
  padding: 5px 20px;
  font-size: 16px;
  background-color: #000000;
  color: white;
  border: none;
  cursor: pointer;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 300;
  border-radius: 6px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.completed {
  text-decoration: line-through;
}

.radio-wrapper {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  margin-right: 10px;
  border: 2px solid #333;
}
.wrapperCheck{
  width: 29px;
  padding: 5px;
  border-width: 2px;
  height: 29px;
  border-radius:50%
}



