export const commaSeparatedListRegex = new RegExp(/(?<=")[^"]+?(?="(?:\s*?,|\s*?$))|(?<=(?:^|,)\s*?)(?:[^,"\s][^,"]*[^,"\s])|(?:[^,"\s])(?![^"]*?"(?:\s*?,|\s*?$))(?=\s*?(?:,|$))/gm);

export function parseSQLRow(row: string) {
	let str = row.slice(1, -1).replaceAll(`""`, `&quot;`);
	let fields = [...str.matchAll(commaSeparatedListRegex)].map(m => m[0].replaceAll(`&quot;`, `"`));
	return fields;
}
	
