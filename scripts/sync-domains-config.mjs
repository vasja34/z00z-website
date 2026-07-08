import { syncDomainConfigFile } from "../src/lib/config/site.ts";

const syncedDomains = syncDomainConfigFile();

console.log(`Synced ${syncedDomains.length} domain entries.`);
