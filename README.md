# Kamroop-Tour-N-Travels
.gallery{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
padding:30px;
}

.gallery img{
width:100%;
border-radius:12px;
box-shadow:0 5px 15px rgba(0,0,0,.2);
transition:.3s;
}

.gallery img:hover{
transform:scale(1.05);
}
