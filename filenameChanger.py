'''
Author: Rana Moeez Hassan
This file was created to remove all the finished files and rename the starter files to the standard convention.
'''
import os
import glob

directory = "/Users/ranamoeez/Desktop/CS/JavaScript30/JavaScript30"
new_name = 'index.html'

# Loop through all files in the directory
for folderDirectory in glob.glob(os.path.join(directory, '*')):
    if not (os.path.isdir(folderDirectory)):
        exit
    else :
        for file in glob.glob(os.path.join(folderDirectory, '*')):
            if file.endswith('-FINISHED.html'):
                # Delete the file ending with -FINISHED
                os.remove(file)
                print(f'Deleted: {file}')
            elif file.endswith('-START.html'):
                # Define the new file path
                new_file_path = os.path.join(folderDirectory, new_name)
                # Rename the file ending with -START
                os.rename(file, new_file_path)
                print(f'Renamed: {file} to {new_file_path}')

