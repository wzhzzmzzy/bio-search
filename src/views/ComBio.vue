<template>
  <div>
    <template v-for="src in search_links">
      <section-card
        class="section-card"
        :title="src.title"
        :links="src.links"
        :key="src.title"
      />
    </template>
  </div>
</template>

<script>
import SectionCard from '../components/SectionCard'

export default {
  name: 'ComBio',
  components: { SectionCard },
  data () {
    return {
      search_links: [{
        title: '学术出版物、资源与学术名词查询',
        links: [{
          src: 'pudmed.jpg',
          alt: 'PubMed 文献数据库',
          query: (query) => `https://www.ncbi.nlm.nih.gov/pubmed/?term=${query}`
        }, {
          src: 'wikipedia.gif',
          alt: '维基百科',
          query: (query) => `https://en.wikipedia.org/wiki/${query}`
        }, {
          src: 'library_genesis.png',
          alt: 'Library Genesis',
          query: (query) => `http://gen.lib.rus.ec/search.php?lg_topic=libgen&open=0&view=simple&res=25&phrase=1&column=def&req=${query}`
        }, {
          src: 'OBRC.png',
          alt: 'OBRC',
          query: (query) => `http://search.hsls.pitt.edu/vivisimo/cgi-bin/query-meta?query=${query}&v%3Aproject=obrc&submit=Search`
        }, {
          src: 'science_direct.png',
          alt: 'Science Direct',
          query: (query) => `https://www.sciencedirect.com/search?qs=${query}`
        }]
      }, {
        title: '化合物与药物信息数据库',
        links: [{
          src: 'pubchem.png',
          alt: 'PubChem 分子库',
          query: (query) => `https://pubchem.ncbi.nlm.nih.gov/${query}`
        }, {
          src: 'drug_bank.png',
          alt: 'Drug Bank 数据库',
          query: (query) => `https://www.drugbank.ca/unearth/q?utf8=%E2%9C%93&query=${query}&searcher=drugs`
        }, {
          src: 'bindingdb.gif',
          alt: 'The Binding Database',
          query: (query) => `https://www.bindingdb.org/bind/tabLuceneResult.jsp?thisInput=${query}&submit=Go`
        }, {
          src: 'guide_to_pharmacology.png',
          alt: 'Guide to Pharmacology',
          query: (query) => `https://www.guidetopharmacology.org/GRAC/DatabaseSearchForward?searchString=${query}&searchCategories=all&species=none&type=all&comments=includeComments&order=rank&submit=Search+Database`
        }]
      }, {
        title: '蛋白与结构数据库',
        links: [{
          src: 'uniprot.png',
          alt: 'Universal Protein 蛋白质数据库',
          query: (query) => `https://www.uniprot.org/uniprot/?sort=score&query=${query}`
        }, {
          src: 'pdbj.svg',
          alt: 'Protein Data Bank Japan',
          query: (query) => `https://pdbj.org/mine/search?query=${query}`
        }, {
          src: 'DrugBank-target.png',
          alt: 'Drug Bank Target',
          query: (query) => `https://www.drugbank.ca/unearth/q?utf8=%E2%9C%93&query=${query}&searcher=bio_entities`
        }, {
          src: 'IntAct_logo.png',
          alt: 'IntAct 数据库',
          query: (query) => `https://www.ebi.ac.uk/intact/interactions?conversationContext=${query}`
        }, {
          src: 'pfam.gif',
          alt: 'Pfam 数据库',
          query: (query) => `http://pfam.xfam.org/search/keyword?query=test${query}`
        }, {
          src: 'InterPro.png',
          alt: 'InterPro',
          query: (query) => `http://www.ebi.ac.uk/interpro/search/text/${query}`
        }]
      }, {
        title: '蛋白表达信息数据库',
        links: [{
          src: 'ensembl.png',
          alt: 'Ensembl 基因组数据库',
          query: (query) => `http://asia.ensembl.org/Multi/Search/Results?q='${query}';site=ensembl_all`
        }, {
          src: 'genevisible.png',
          alt: 'Genevisible',
          query: (query) => `https://genevisible.com/tissues/HS/Gene%20Symbol/${query}`
        }, {
          src: 'Bgee.png',
          alt: 'Bgee',
          query: (query) => `https://bgee.org/?page=gene&query=${query}`
        }, {
          src: 'GTEx.png',
          alt: 'GTEx 数据库',
          query: (query) => `https://www.gtexportal.org/home/gene/${query}`
        }]
      }, {
        title: '酶与生物化学信息数据库',
        links: [{
          src: 'kegg.gif',
          alt: 'KEGG 数据库',
          query: (query) => `https://www.genome.jp/dbget-bin/www_bfind_sub?mode=bfind&max_hit=500&dbkey=kegg&keywords=${query}`
        }, {
          src: 'KEGG_Pathway.png',
          alt: 'KEGG Pathway',
          query: (query) => `https://www.kegg.jp/kegg-bin/search_pathway_text?map=map&mode=1&viewImage=true&keyword=${query}`
        }, {
          src: 'BRENDA.png',
          alt: 'Enzyme Database - BRENDA',
          query: (query) => `https://www.brenda-enzymes.org/fulltext.php?Searchterm=${query}`
        }, {
          src: 'hmdb.png',
          alt: 'Human Metabolome Database',
          query: (query) => `https://hmdb.ca/unearth/q?utf8=%E2%9C%93&query=${query}&searcher=metabolites`
        }, {
          src: 'reactome.png',
          alt: 'Reactome Pathway Database',
          query: (query) => `https://reactome.org/content/query?q=${query}&species=Homo+sapiens&species=Entries+without+species&cluster=true`
        }]
      }]
    }
  }
}
</script>
