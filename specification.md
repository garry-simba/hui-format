
# HUI format
This is format for 3d models
version 0.2.0

### Ideology
- All data in one file
- Small file size


## Format description
Hui file consists of nodes, numbered from 0 at start of the file.
Node header:

|bytes:|[0]|[1][2][3]|[4]...|
|--|--|--|--|
|values:|Node type|Node lengh in bytes|Node data


### Types
 All numbers are little-endian. it means Uint(04 00 00 00) = 4;

 There are also some non-standard types:
 - 3 bytes unsigned integer: (LE) val = b1 + b2<<8 + b3 <<16
 - float 16 - 16 bit float type IEEE 754

### Node types
#### NODE_GEOMETRY = 1;
Node data consists of attributes with binary data;


###### geometry node attribute
|[0]|[1][2][3]|[4]...|
|--|--|--|
|attribute type| attribute length in bytes|attribute data|


|Attribute type| data description|
|--|--|
|GEOMETRY_ATTR_VERTICIES = 1| Float16 verticies x, y, z interleaved|
|GEOMETRY_ATTR_TRIANGLE_FACES = 2| Uint16 vertex indices a,b,c interleaved|
|GEOMETRY_ATTR_SKIN_INDICES = 3| Uint8 bone numbers a, b, c, d for each vertex|
|GEOMETRY_ATTR_SKIN_WEIGHTS = 4| Uint8 bone weights a, b, c, d for each vertex normalized to 0-255|

#### NODE_MESH = 2;
Mesh data consists of parameters with links to other nodes (numbers of other nodes) or int 16 constant.
###### mesh node parameter
|[0][1]|[2][3]|
|--|--|
|parameter type|parameter value|

###### mesh parameters

|parameter|value description|
|--|--|
|MESH_PARAM_GEOMETRY = 1| index of geometry node|
|MESH_PARAM_SKELETON = 2| index of skeleton node|

#### NODE_SKELETON = 3
consist of bones, numbered from 0.
Each bone has head and tail coordinates, relative to its parent.
Each bone local coordinate system has same direction as global.

###### bone record
|[0][1]|[2][3]|[4][5]|[6][7]|[8][9]|[10][11]|[12][13]
|--|--|--|--|--|--|--|
|head x|head y| head z| tail x| tail y| tail z| parent index. 0xFFFF if no parent|
|float16|float16|float16|float16|float16|float16|Uint16|

#### NODE_ANIMATION_CLIP = 4
|[0][1]|[2]..[n]|[n]...|
|--|--|--|
|clip name length| clip name | tracks data|

Tracks data consist of tracks
###### track record
|[0]|[1][2][3]|[4]...|
|--|--|--|
|track type| track length in bytes|structure depends of track type|

Track types:

TRACK_BONE_POSITION_KEYFRAMES = 1

|[0]|[1][2][3]|[4][5]|([6,7], [8,9], [10,11], [12,13])...|
|--|--|--|--|
|type = 1| track length|bone number|(dt, x, y, z):float16|

dt - delta time from previous frame;<br>
x,y,z - relative displacement in parent bone's local coordinate system

TRACK_BONE_ROTATION_KEYFRAMES = 2

|[0]|[1][2][3]|[4][5]|([6,7], [8,9], [10,11], [12,13])...|
|--|--|--|--|
|type = 2| track length|bone number|(dt, ax, ay, az):float16|

ax, ay, az - components of normalized rotation quaternion
