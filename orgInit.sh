sfdx force:org:create -f config/project-scratch-def.json -d 1 -s
sfdx force:source:push
sfdx force:user:permset:assign -n LWC
sfdx force:user:password:generate
sfdx force:org:open -p /lightning/n/Toast