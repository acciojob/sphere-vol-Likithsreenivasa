function volume_sphere() {
	event.preventDefault();
	const radiusInput=document.getElementById("radius");
	const radius=parseFloat(radiusInput.value);
	let ans=0;

	if(isNaN(radius))
	{
		// alert("Please enter a valid number for the radius:");
	const volumeField = document.getElementById("volume");
    volumeField.value = "NaN";
    return;
	}
	const volume=(4/3) * Math.PI * Math.pow(radius,3)

	const volume_field=document.getElementById("volume");
	volume_field.value=volume.toFixed(4);
	
    //Write your code here
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
