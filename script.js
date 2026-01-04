function gen(){
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$';
  let pass = '';
  for(let i=0;i<10;i++){
    pass += chars[Math.floor(Math.random()*chars.length)];
  }
  document.getElementById('out').value = pass;
}
