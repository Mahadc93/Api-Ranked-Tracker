import React from 'react';
import './App.css';




function App () {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Weekly Solo Que Tracker<button>Update</button></th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Players</td>
            <td>Games played</td>
          </tr>
          <tr>
            <td><a href="https://na.op.gg/summoners/na/Z%C3%B6g">Zög</a></td>
            <td>Data</td>
          </tr>
          <tr>
            <td><a href="https://na.op.gg/summoners/na/maik">Maik</a></td>
            <td>Data</td>
          </tr>
          <tr>
            <td><a href="https://na.op.gg/summoners/na/SkillFulChampion">SkillFulChampion</a></td>
            <td>Data</td>
          </tr>
          <tr>
            <td><a href="https://na.op.gg/summoners/na/Hi%20Im%20AkaliHui">Hi Im AkaliHui</a></td>
            <td>Data</td>
          </tr>
          <tr>
            <td><a href="https://na.op.gg/summoners/na/Noroware">Noroware</a></td>
            <td>Data</td>
          </tr>
          <tr>
            <td><a href="https://na.op.gg/summoners/na/Zyzzyx">Zyzzyx</a></td>
            <td>Data</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;