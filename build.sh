# build.sh - utlities for building and running typescript code
#
# ./build.sh build - transpile code, and move to the build/ dir
# ./build.sh run - run typescript code
#

#if [ "$1" = "build"] # transpile the typescript
#	tsc
#	# create dir if not exists then copy transpiled files
#	mkdir -p build/data && cp -R src/data build/
#then

if [ "$1" = "run" ] # run program
then
	# move to bot dir and run bot
	cd dist/src && node index.js
else
	rm -r dist/
	echo "compiling"
	tsc

	echo "moving to files to build/ directory"
	# create dir if not exists then copy transpiled files
	cd dist/src/ && ln -s ../../src/views/ && ln -s ../../src/public/ 
fi