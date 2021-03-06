#version 140

uniform vec4 bigColor;
in vec4 BaseColor;
uniform float d;

void main()
{
    vec4 color = BaseColor;

    while (color.x < d) {
        color += bigColor;
    }

    gl_FragColor = color;
}
