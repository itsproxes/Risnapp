
async function sendToCoach(message){
  const res = await fetch('/api/coach', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({
      message,
      userData: {xp:100, streak:3}
    })
  });

  const data = await res.json();
  return data.reply;
}
