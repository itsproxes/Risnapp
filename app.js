async function testAI(){
  const res = await fetch('/api/coach', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({
      message: "Give me motivation",
      userData: {xp:100, streak:3}
    })
  });

  const data = await res.json();
  alert(data.reply);
}
