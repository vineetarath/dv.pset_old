var x,d
function setup ()
{
createCanvas (500,500);
background (0);
x = 1;
d = 0;
}

function draw()
{
    clear();
    ellipse (x,250,20,20);

    if (x<0)
    {
        d=0;
    }

    if (d==0)
    {
        x++
    }
    if (x>width)
    {
        d=1;
    }

    if (d==1)
    {
        x--
    }
}
