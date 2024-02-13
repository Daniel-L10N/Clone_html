# Twitter_folowCard

## Parametros:
_**userName**_ = 'name'<br/><p>Este valor, sera renderizado en el nombre de usuario, y se le asignara una img desde <a href='http://unavatar.io/avatar' >avatar.io</a> ></p><hr/>
**_isFolowing={true}_**  or  **_isFolowing={false}_** 
<p>Descripcion:<br/> Si se esta siguiendo o no al usuario.</p><hr/>


- Uso del componente:
### const format = (userName) => `@${userName}`;
      <div className='div'>

      <TwFolowCard 
      formatUserName= {format} 
      isFolowing={false} 
      userName="midudev" 
      name= "Miguel Angel Duran" />

      <TwFolowCard formatUserName= {format}
       isFolowing ={false}
       userName="pheralb" 
       name= "Pablo Hernandez" />

      <TwFolowCard 
      formatUserName= {format} 
      isFolowing={false}
       userName="pedro" 
      name= "Pedro Pablo"/>

      <TwFolowCard 
      formatUserName= {format} 
      isFolowing={false}
       userName="katherine" 
      name= "Katherine Martinez" />
      </div>